import React from "react";
import { useTranslation } from "react-i18next";
import { AppSchema, SchemaTable } from "../types";
import { Database, Key, Link as LinkIcon } from "lucide-react";

interface Props {
  schema: AppSchema;
}

export const SchemaVisualizer: React.FC<Props> = ({ schema }) => {
  const { t } = useTranslation();
  return (
    <div className="w-full h-[500px] relative overflow-auto border border-gray-200 rounded-xl bg-slate-50 p-8 shadow-inner">
      <div className="absolute top-4 left-4 flex gap-4 text-xs font-semibold text-gray-400 uppercase tracking-widest pointer-events-none">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-blue-500 rounded"></div>{" "}
          {t("schema.table")}
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>{" "}
          {t("schema.primaryKey")}
        </div>
      </div>

      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ minWidth: "1000px", minHeight: "800px" }}
      >
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="0"
            refY="3.5"
            orientation="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="#3A7DFF" />
          </marker>
        </defs>
        {schema.relations.map((rel, idx) => {
          const from = schema.tables.find((t) => t.id === rel.fromTable);
          const to = schema.tables.find((t) => t.id === rel.toTable);
          if (!from || !to) return null;

          const startX = from.position.x + 240;
          const startY = from.position.y + 100;
          const endX = to.position.x;
          const endY = to.position.y + 100;

          return (
            <path
              key={idx}
              d={`M ${startX} ${startY} C ${startX + 100} ${startY}, ${
                endX - 100
              } ${endY}, ${endX} ${endY}`}
              className="erd-line"
              markerEnd="url(#arrowhead)"
            />
          );
        })}
      </svg>

      <div
        className="relative"
        style={{ minWidth: "1000px", minHeight: "800px" }}
      >
        {schema.tables.map((table) => (
          <div
            key={table.id}
            className="absolute w-60 bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden z-10 hover:border-blue-400 transition-colors cursor-default group"
            style={{ left: table.position.x, top: table.position.y }}
          >
            <div className="bg-[#1E4C9D] text-white px-3 py-2 flex items-center justify-between">
              <span className="font-bold text-sm tracking-tight">
                {table.name}
              </span>
              <Database size={14} className="opacity-80" />
            </div>
            <div className="p-0">
              {table.fields.map((field, fIdx) => (
                <div
                  key={fIdx}
                  className="px-3 py-1.5 flex items-center justify-between border-b border-gray-50 last:border-0 hover:bg-blue-50 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    {field.isPrimary && (
                      <Key size={12} className="text-indigo-600" />
                    )}
                    <span
                      className={`text-xs ${
                        field.isPrimary
                          ? "font-semibold text-gray-900"
                          : "text-gray-700"
                      }`}
                    >
                      {field.name}
                    </span>
                  </div>
                  <span className="text-[10px] text-gray-400 font-mono uppercase bg-gray-50 px-1 rounded">
                    {field.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
