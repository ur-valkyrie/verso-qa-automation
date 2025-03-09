import { format } from "date-fns";
import { de } from "date-fns/locale";

export function randomTitle(): string {
  const randomNum = Math.floor(Math.random() * 900) + 100; // 3 digits
  return `AutoTask-${randomNum}`;
}

export function randomDescription(): string {
  return `This is a random description #${Math.floor(Math.random() * 10000)}`;
}

export function getTomorrowInGermanFormat(): string {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  return format(tomorrow, "d. MMMM yyyy", { locale: de });
}
