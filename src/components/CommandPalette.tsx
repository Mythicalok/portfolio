import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { FileText, Github, Mail, User, Code2, Home, Settings } from "lucide-react";

export function CommandPalette() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    const runCommand = (command: () => void) => {
        setOpen(false);
        command();
    };

    const scrollToElement = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="p-0 overflow-hidden bg-background/95 backdrop-blur-md border border-border shadow-2xl max-w-2xl rounded-xl">
                <Command
                    className="[&_[cmdk-root]]:min-h-[300px] [&_[cmdk-input]]:h-14 [&_[cmdk-input]]:px-4 [&_[cmdk-input]]:text-base [&_[cmdk-item]]:px-4 [&_[cmdk-item]]:py-3 [&_[cmdk-item]]:text-sm [&_[cmdk-item]_svg]:h-4 [&_[cmdk-item]_svg]:w-4"
                    label="Command Menu"
                >
                    <Command.Input
                        className="w-full border-none bg-transparent px-4 py-4 outline-none placeholder:text-muted-foreground text-foreground border-b border-border/50"
                        placeholder="Type a command or search..."
                    />
                    <Command.List className="max-h-[300px] overflow-y-auto p-2">
                        <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
                            No results found.
                        </Command.Empty>
                        <Command.Group heading="Navigation" className="text-xs font-semibold text-muted-foreground px-2 py-1.5 mb-1">
                            <Command.Item
                                className="flex items-center gap-2 cursor-pointer rounded-md text-foreground hover:bg-muted/50 aria-selected:bg-muted/50 aria-selected:text-foreground transition-colors"
                                onSelect={() => runCommand(() => scrollToElement("home"))}
                            >
                                <Home />
                                Go to Home
                            </Command.Item>
                            <Command.Item
                                className="flex items-center gap-2 cursor-pointer rounded-md text-foreground hover:bg-muted/50 aria-selected:bg-muted/50 aria-selected:text-foreground transition-colors"
                                onSelect={() => runCommand(() => scrollToElement("about"))}
                            >
                                <User />
                                View About
                            </Command.Item>
                            <Command.Item
                                className="flex items-center gap-2 cursor-pointer rounded-md text-foreground hover:bg-muted/50 aria-selected:bg-muted/50 aria-selected:text-foreground transition-colors"
                                onSelect={() => runCommand(() => scrollToElement("projects"))}
                            >
                                <Code2 />
                                View Projects
                            </Command.Item>
                        </Command.Group>

                        <Command.Group heading="Actions" className="text-xs font-semibold text-muted-foreground px-2 py-1.5 mt-2 mb-1">
                            <Command.Item
                                className="flex items-center gap-2 cursor-pointer rounded-md text-foreground hover:bg-muted/50 aria-selected:bg-muted/50 aria-selected:text-foreground transition-colors"
                                onSelect={() => runCommand(() => window.open('https://github.com/13sanni', '_blank'))}
                            >
                                <Github />
                                Open GitHub
                            </Command.Item>
                            <Command.Item
                                className="flex items-center gap-2 cursor-pointer rounded-md text-foreground hover:bg-muted/50 aria-selected:bg-muted/50 aria-selected:text-foreground transition-colors"
                                onSelect={() => runCommand(() => scrollToElement("contact"))}
                            >
                                <Mail />
                                Contact Sunny
                            </Command.Item>
                            <Command.Item
                                className="flex items-center gap-2 cursor-pointer rounded-md text-foreground hover:bg-muted/50 aria-selected:bg-muted/50 aria-selected:text-foreground transition-colors"
                                onSelect={() => runCommand(() => alert('Resume download feature pending...'))}
                            >
                                <FileText />
                                Download Resume
                            </Command.Item>
                        </Command.Group>
                    </Command.List>
                </Command>
            </DialogContent>
        </Dialog>
    );
}
