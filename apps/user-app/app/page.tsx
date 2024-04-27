import { PrismaClient } from "@disciplineddev/db/client";

const client = new PrismaClient()




export default function Page(): JSX.Element {
  return (
    <div className="text-2xl">
        Hello Disciplined Dev
    </div>
  );
}
