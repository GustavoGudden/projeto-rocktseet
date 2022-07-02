import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptbr from "date-fns/locale/pt-BR";
import { Link } from "react-router-dom";
interface lessonProps {
  title: string;
  slug: string;
  avalibledata: Date;
  type: "live" | "class";
}

export function Leasson(props: lessonProps) {
  const islessonavalibe = isPast(props.avalibledata);
  const availableDateFormatted = format(
    props.avalibledata,
    "EEE ' * 'd' de  'MMMM' * 'k'h'mm ",
    { locale: ptbr }
  );
  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray-300">{availableDateFormatted}</span>

      <div className="rounded border border-gray-500 p-4 mt-2  group-hover:border-green-500 ">
        <header className="flex items-center justify-between">
          {islessonavalibe ? (
            <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
              <CheckCircle size={20} />
              conteudo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              em breve
            </span>
          )}

          <span className="text-xs rounded px-2 py-[0.125rem] text-white border border-green-300 font-bold">
            {props.type === "live" ? "ao vivo" : "Aula Pratica"}
          </span>
        </header>
        <strong className="text-gray-200 mt-5 block ">{props.title}</strong>
      </div>
    </Link>
  );
}
