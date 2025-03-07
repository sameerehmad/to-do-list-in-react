'use client';

import TodoApp from "../components/TodoApp/todoApp";
import { useParams } from "next/navigation";
import Error from "next/error";

export default function SubPage() {
    const sublistId = Number(useParams().sublist_id);

    if (sublistId === 0) {
        return (
            <Error statusCode={0} title="Invalid sublist ID" />
        );
    }
    return (
        <div className="relative max-w-screen-md mx-auto">
            <TodoApp title="Sublist page" listNo={sublistId}/>
        </div>
    );
}