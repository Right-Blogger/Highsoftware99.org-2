import React from 'react';

interface ArticleRendererProps {
  content: string;
}

export default function ArticleRenderer({ content }: ArticleRendererProps) {
  // Parse paragraphs and headings
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let inList = false;
  let listItems: string[] = [];
  let inTable = false;
  let tableRows: string[][] = [];

  const flushList = (key: string) => {
    if (inList && listItems.length > 0) {
      elements.push(
        <ul key={key} className="my-5 space-y-2.5 list-disc pl-6 text-slate-700 leading-relaxed">
          {listItems.map((item, idx) => (
            <li key={idx} dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
          ))}
        </ul>
      );
      listItems = [];
      inList = false;
    }
  };

  const flushTable = (key: string) => {
    if (inTable && tableRows.length > 0) {
      const header = tableRows[0];
      const rows = tableRows.slice(1);
      elements.push(
        <div key={key} className="my-8 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left text-sm text-slate-700">
            <thead className="bg-slate-50 text-slate-900 border-b border-slate-200">
              <tr>
                {header.map((col, idx) => (
                  <th key={idx} className="px-4 py-3 font-semibold">
                    {col.trim()}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {rows.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-slate-50/50">
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} className="px-4 py-3">
                      {cell.trim()}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      tableRows = [];
      inTable = false;
    }
  };

  const formatInline = (text: string): string => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-[#0B1B3D]">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic text-slate-700">$1</em>')
      .replace(/`([^`]+)`/g, '<code class="bg-slate-100 text-blue-700 px-1.5 py-0.5 rounded text-xs font-mono">$1</code>');
  };

  lines.forEach((rawLine, index) => {
    const line = rawLine.trim();

    // Table row detection
    if (line.startsWith('|') && line.endsWith('|')) {
      // check if delimiter row
      if (line.includes('---')) {
        return; // skip markdown divider
      }
      flushList(`list-before-table-${index}`);
      inTable = true;
      const cells = line.split('|').slice(1, -1);
      tableRows.push(cells);
      return;
    } else {
      flushTable(`table-${index}`);
    }

    // List item
    if (line.startsWith('- ') || line.startsWith('* ')) {
      inList = true;
      listItems.push(line.substring(2));
      return;
    } else if (/^\d+\.\s/.test(line)) {
      inList = true;
      listItems.push(line.replace(/^\d+\.\s/, ''));
      return;
    } else {
      flushList(`list-${index}`);
    }

    // Horizontal divider
    if (line === '---') {
      elements.push(<hr key={index} className="my-10 border-slate-200" />);
      return;
    }

    // Headings
    if (line.startsWith('# ')) {
      // H1 is already rendered on the page hero
      return;
    }
    if (line.startsWith('## ')) {
      const headingText = line.replace('## ', '');
      const id = headingText.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      elements.push(
        <h2
          key={index}
          id={id}
          className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3D] tracking-tight mt-12 mb-4 scroll-mt-28"
        >
          {headingText}
        </h2>
      );
      return;
    }
    if (line.startsWith('### ')) {
      const headingText = line.replace('### ', '');
      elements.push(
        <h3
          key={index}
          className="text-xl sm:text-2xl font-bold text-[#0B1B3D] tracking-tight mt-8 mb-3"
        >
          {headingText}
        </h3>
      );
      return;
    }

    // Standard paragraph
    if (line.length > 0) {
      elements.push(
        <p
          key={index}
          className="text-slate-700 leading-relaxed text-base sm:text-lg mb-5"
          dangerouslySetInnerHTML={{ __html: formatInline(line) }}
        />
      );
    }
  });

  flushList('final-list');
  flushTable('final-table');

  return <div className="article-body-content">{elements}</div>;
}
