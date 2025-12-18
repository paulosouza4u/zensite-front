import Sidebar from "@private/_components/sidebar";
import Content from "@private/_components/content";

export default function Dashboard() {
    return (
        <main>
            <div className="flex py-4">
                <Sidebar/>
                <Content/>
            </div>
        </main>
    );
}