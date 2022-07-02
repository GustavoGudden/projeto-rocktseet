import { Header } from "../componentes/header";
import { Video } from "../componentes/video";
import { Sidebar } from "../componentes/sidebar";
import { useParams } from "react-router-dom";

export function Eventos() {
  const { slug } = useParams<{ slug: string }>();
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex  flex-1">
        {slug ? <Video lessonslug={slug} /> : <div className="flex-1" />}
        <Sidebar />
      </main>
    </div>
  );
}
