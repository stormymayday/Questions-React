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
            {data.length &&
                data.map((item) => {
                    const { id } = item;
                    return <AccordionItem key={id} item={item} />;
                })}
        </section>
    );
}
export default Accordion;
