"use client";

import { useState } from "react";

export function Button() {

    const [name, setName] = useState("Nome 1");

    function handleClick() {
        setName("Nome 2");
    }

    return (
        <div>
            <button className="border rounded p-2" onClick={handleClick}>Alterar Nome</button>
            <p>{name}</p>
        </div>
    );
}