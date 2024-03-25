import Client from "@/app/(models)/Client";
import { NextResponse } from "next/server";

// async function getClientById(id) {
//   try {
//     return await Client.findOne({ _id: id });
//   } catch (err) {
//     throw err;
//   }
// }

// export const getStaticProps = async ({ params }) => {
//   const client = await getClientById(params.id);
//   return { props: { client } };
// };

export async function GET(req, { params }) {
  try {
    const { id } = params;

    const foundClient = await Client.findOne({ _id: id });

    if (!foundClient) {
      return NextResponse.json(
        { message: "Client not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ foundClient }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
