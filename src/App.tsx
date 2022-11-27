import { MinusCircle, PlusCircle } from "phosphor-react";
import { useState } from "react";
import { jsonOrgan } from "../database";
import { Seções } from "./components/Secoes";

export function App() {
  const [dropDown, setDropDown] = useState(false);

  return (
    <div className="flex items-center justify-center">
      <div className="my-10">
        <div className="w-36 h-20 flex items-center justify-center mx-auto relative border-2 border-gray-50 rounded-md text-center group-hover:border-yellow-600">
          <div className="grid">
            <h2 className="text-sm">Prefeito</h2>
            <h2 className="text-sm font-semibold">Marcos Slobodticov</h2>
          </div>
        </div>
        {jsonOrgan[0].departamentos.length > 0 ? (
          dropDown ? (
            <>
              <MinusCircle
                size={32}
                className="mx-auto cursor-pointer"
                onClick={() => setDropDown(!dropDown)}
              />
              <div className="w-0 h-10 border-l-2 border-bg-[#dbdbdb] mx-auto"></div>
              <Seções seções={jsonOrgan[0].departamentos} />
            </>
          ) : (
            <PlusCircle
              size={32}
              className="mx-auto cursor-pointer"
              onClick={() => setDropDown(!dropDown)}
            />
          )
        ) : null}
      </div>
    </div>
  );
}
