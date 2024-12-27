"use client"

import { useModal } from "@/hooks/useModalContext"
import "@/styles/modal.css"

export default function Modal() {
    const { isOpen, closeModal, modalContent } = useModal()

    if (!isOpen) return null
    return (
        <>
            <dialog className="modal" open={isOpen}>
                <header className="flex modal-header">
                    <button>info</button>
                    <div>{modalContent?.title}</div>
                    <button onClick={closeModal}>close</button>
                </header>
                <div className="modal-content">{modalContent?.content}</div>
            </dialog>
            <div className="modal-shadow" onClick={closeModal}></div>
        </>
    )
}
