"use client";

import { questions } from "@/data";
import { QuestionType } from "@/types";
import { useState } from "react";
import AccordionItem from "./AccordionItem";

function Accordion() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [data, setData] = useState<QuestionType[]>(questions);

    return (
        <section className="container">
            {data.length > 0
                ? data.map((item) => {
                      const { id } = item;
                      return <AccordionItem key={id} item={item} />;
                  })
                : null}
        </section>
    );
}
export default Accordion;
