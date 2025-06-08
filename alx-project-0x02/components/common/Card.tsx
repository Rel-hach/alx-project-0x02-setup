// components/common/Card.tsx
import { type CardProps } from "@/interfaces";

export default function Card({ title, content, className }: CardProps) {
  return (
    <div className={`border rounded-lg p-4 shadow-sm ${className || ""}`}>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{content}</p>
    </div>
  );
}