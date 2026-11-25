import { Home } from "@/components/portal/Home";

import { getPrivatePortrait } from "@/lib/private-portrait";

export default async function HomePage() {
  return <Home showPortrait={Boolean(await getPrivatePortrait())} />;
}
