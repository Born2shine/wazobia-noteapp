import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription
} from "@/components/ui/alert-dialog"
import { AlertDialogTitle } from "@radix-ui/react-alert-dialog"
import { X } from "lucide-react"

interface ModalProps {
    show: boolean,
    handleClose: () => void,
    children: React.ReactNode
}

export default function Modal({show, handleClose, children}: ModalProps) {
    return (
        <AlertDialog 
            open={show}
            onOpenChange={handleClose}
        >
            <AlertDialogContent className="p-1">
                {/* <AlertDialogTitle></AlertDialogTitle>
                <AlertDialogDescription></AlertDialogDescription> */}
                {children}
                <span><X width={15} height={15} className="absolute top-3 right-4 cursor-pointer" onClick={handleClose}/></span>
            </AlertDialogContent>
        </AlertDialog>
    )
}
