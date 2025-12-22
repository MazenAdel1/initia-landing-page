import { GoogleGenAI, Type } from "@google/genai";
import { AppSchema } from "../types";

export async function generateSchemaFromPrompt(
  prompt: string
): Promise<AppSchema> {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Based on this description: "${prompt}", generate a detailed database schema in JSON format. 
    Include tables, fields (with types: string, number, boolean, date, etc.), and relations.
    Make it feel like a real production application.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          tables: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                id: { type: Type.STRING },
                name: { type: Type.STRING },
                fields: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      name: { type: Type.STRING },
                      type: { type: Type.STRING },
                      isPrimary: { type: Type.BOOLEAN },
                      isNullable: { type: Type.BOOLEAN },
                    },
                    required: ["name", "type"],
                  },
                },
              },
              required: ["id", "name", "fields"],
            },
          },
          relations: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                fromTable: { type: Type.STRING },
                fromField: { type: Type.STRING },
                toTable: { type: Type.STRING },
                toField: { type: Type.STRING },
                type: {
                  type: Type.STRING,
                  enum: ["one-to-one", "one-to-many", "many-to-many"],
                },
              },
              required: [
                "fromTable",
                "fromField",
                "toTable",
                "toField",
                "type",
              ],
            },
          },
        },
        required: ["tables", "relations"],
      },
    },
  });

  // Extract text safely; use .text property instead of calling .text() method.
  const jsonStr = response.text?.trim() || '{"tables": [], "relations": []}';
  const schema = JSON.parse(jsonStr) as AppSchema;

  // Add coordinates for visual layout if tables are generated
  if (schema.tables) {
    schema.tables = schema.tables.map((table, index) => ({
      ...table,
      position: {
        x: 50 + (index % 3) * 300,
        y: 50 + Math.floor(index / 3) * 350,
      },
    }));
  }

  return schema;
}
