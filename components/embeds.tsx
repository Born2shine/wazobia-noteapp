import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { GitBranch, LucideImage, LucidePlus, LucideVideo } from "lucide-react"
import SingleEmbed from "./single-embed"
import { useRef, useState } from "react"
import Modal from "./modal"
import { Input } from "./ui/input"
import Switch from 'react-switch';

interface EmbedsContainerProps {
    quillRef?: any,
    editorContent: any,
    setEditorContent: (arg: any) => void
    // imageFile: any,
    // setImageFile: (arg: any) => void
}

export default function EmbedsContainer({ quillRef, editorContent, setEditorContent }: EmbedsContainerProps) {
    const [showImageUploader, setShowImageUploader] = useState(false)
    const [showVideoUploader, setShowVideoUploader] = useState(false)
    const [showSocialLinkUploader, setShowSocialLinkUploader] = useState(false)
    const [disableCaption, setDisableCaption] = useState(false)

    const imageRef = useRef<any>(null)

    const handleFileChange = (e: any) => {
        let imgFile = e.target.files[0]
        const imgURL = URL.createObjectURL(imgFile)
        console.log(editorContent)

        // const editorContainer = quillRef.current?.getEditor().root;
        // if (editorContainer) {
        //     const firstParagraph = editorContainer.querySelector('p');
        //     console.log(firstParagraph)
        // }
        // let reader = new FileReader();
        // const getFileBase64 = reader.onloadend = async () => {
        //     return reader.result
        // }
        // reader.readAsDataURL(imgFile);
        // getFileBase64()
        // console.log(getFileBase64())

    }

    return (
        <>
            <Modal
                show={showImageUploader}
                handleClose={() => setShowImageUploader(false)}
            >
                <div className="p-3">
                    <span className='text-[.7rem] text-[#333333] font-bold '>EMBEDS</span>
                    <span className='block text-[.6rem] text-[#333333] py-2'>Upload Image</span>
                    <div className="">
                        <span className='block text-[.5rem] text-[#333333]/70 py-2'>FILE UPLOAD</span>
                        <input type="file" ref={imageRef} className="hidden" onChange={handleFileChange} />
                        <div className="border border-dashed border-green-600 rounded-md grid place-content-center h-32">
                            <span className="block p-2 px-3 border border-green-600 text-[.6rem] rounded-sm cursor-pointer" onClick={() => imageRef.current.click()}>Import Image from Device</span>
                        </div>
                        <div className="flex gap-3 mt-4">
                            <button className="bg-[#0A7227] text-white p-1 px-3.5 rounded-sm text-[.7rem]">Embed</button>
                            <button className="bg-none border text-gray-700 p-1 px-3.5 rounded-sm text-[.7rem]" onClick={() => setShowImageUploader(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            </Modal>

            <Modal
                show={showVideoUploader}
                handleClose={() => setShowVideoUploader(false)}
            >
                <div className="p-3">
                    <span className='text-[.7rem] text-[#333333] font-bold'>EMBEDS</span>
                    <div className="">
                        <div className="mb-2">
                            <label className='block text-[.7rem] text-[#333333]/70 py-2'>VIDEO PROVIDER</label>
                            <select className="border w-full p-[5px] rounded-sm bg-[#FAFAFA] text-xs">
                                <option value="youtube">Youtube</option>
                            </select>
                        </div>
                        <Input
                            labelTitle="URL"
                            className=""
                            placeholder="https://www.youtube.com/watch?v=QyuVXsCiVg0"
                        />
                        <div className="flex gap-3 mt-4">
                            <button className="bg-[#0A7227] text-white p-1 px-3.5 rounded-sm text-[.7rem]">Embed</button>
                            <button className="bg-none border text-gray-700 p-1 px-3.5 rounded-sm text-[.7rem]" onClick={() => setShowVideoUploader(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            </Modal>

            <Modal
                show={showSocialLinkUploader}
                handleClose={() => setShowSocialLinkUploader(false)}
            >
                <div className="p-3">
                    <span className='text-[.7rem] text-[#333333] font-bold'>EMBEDS</span>
                    <div className="">
                        <div className="mb-2">
                            <label className='block text-[.7rem] text-[#333333]/70 py-2'>SOCIAL MEDIA PLATFORM</label>
                            <select className="border w-full p-[5px] rounded-sm bg-[#FAFAFA] text-xs">
                                <option value="facebook">Facebook</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <Input
                                labelTitle="URL"
                                className=""
                                placeholder="https://jungle/post/Earn-Passive.youtube.com/watch?v=QyuVXsCiVg0"
                            />
                        </div>
                        <Input
                            labelTitle="CODE"
                            className=""
                            placeholder="https://jungle/post/Earn-Passive.youtube.com/watch?v=QyuVXsCiVg0"
                        />
                        <div className="flex justify-between items-center mt-2">
                            <span className='text-[.7rem] text-[#333333]/70 font-normal'>Disable caption</span>

                            <Switch
                                onColor="#0A7227"
                                height={13}
                                width={28}
                                className="!tw-w-[22px]"
                                onChange={() => setDisableCaption(!disableCaption)} 
                                checked={disableCaption}
                                uncheckedIcon={false}
                                checkedIcon={false}
                            />

                        </div>
                        <div className="flex gap-3 mt-4">
                            <button className="bg-[#0A7227] text-white p-1 px-3.5 rounded-sm text-[.7rem]">Embed</button>
                            <button className="bg-none border text-gray-700 p-1 px-3.5 rounded-sm text-[.7rem]" onClick={() => setShowSocialLinkUploader(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            </Modal>

            <Popover
            >
                <PopoverTrigger asChild>
                    <span className="bg-[#E7F1E9] mb-4 rounded-full cursor-pointer w-8 h-8 grid place-content-center"><LucidePlus width={15} height={15} />
                    </span>
                </PopoverTrigger>
                <PopoverContent className="w-80 absolute p-0">
                    <span className='text-[.6rem] text-[#333333] p-3'>EMBEDS</span>
                    <div className='rounded-md flex flex-col'>
                        <SingleEmbed
                            icon={<LucideImage width={15} height={15} color="#343E37" />}
                            title="Picture"
                            subTitle="jpeg, png"
                            handleClick={() => setShowImageUploader(true)}
                        />
                        <SingleEmbed
                            icon={<LucideVideo width={15} height={15} color="#343E37" />}
                            title="Video"
                            subTitle="Jw player, Youtube, Vimeo"
                            handleClick={() => setShowVideoUploader(true)}
                        />
                        <SingleEmbed
                            icon={<GitBranch width={15} height={15} color="#343E37" />}
                            title="Social"
                            subTitle="Instagram, Twitter, Tiktok, Snapchat, Facebook"
                            handleClick={() => setShowSocialLinkUploader(true)}
                        />
                    </div>
                </PopoverContent>
            </Popover>
        </>

    )
}
