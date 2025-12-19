import { NextResponse } from "next/server";
import { db } from "@/src/lib/firebaseAdmin";

export async function POST(request: Request) {
    try {
        const data = await request.json();

        // Salva no Firestore na coleção 'contacts'
        const docRef = await db.collection("contacts").add({
            ...data,
            createdAt: new Date().toISOString(), // Timestamp para organização
        });

        return NextResponse.json({
            message: "Mensagem salva com sucesso!",
            id: docRef.id
        }, { status: 200 });

    } catch (error) {
        console.error("Erro Firebase Admin:", error);
        return NextResponse.json({
            message: "Erro ao salvar no banco de dados"
        }, { status: 500 });
    }
}