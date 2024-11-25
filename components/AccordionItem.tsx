"use client";

import { QuestionType } from "@/types";

interface AccordionItemProps {
    item: QuestionType;
}

function AccordionItem(props: AccordionItemProps) {
    const { title, info } = props.item;

    return (
        <article className="question">
            <header>
                <h5>{title}</h5>
            </header>
            <p>{info}</p>
        </article>
    );
}
export default AccordionItem;
