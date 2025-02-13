import dbConnect from "@/lib/dbConnect";
import User from "@/Model/user";

export async function POST(request) {
    try {
        await dbConnect();
        await User.deleteMany({ isMember: false, deletionDate: { $lte: new Date() } });

        return new Response(JSON.stringify({ message: "User cleanup completed" }), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });
    } catch (error) {
        console.error("Cleanup Error:", error);
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}
