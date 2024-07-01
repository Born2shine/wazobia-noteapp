"use client"

import CustomEditor from '@/components/editor';
import EmbedsContainer from '@/components/embeds';
import { LucidePlus } from 'lucide-react';
import { useRef, useState } from 'react';

export default function Home() {
  const [wordCount, setWordCount] = useState<number>(0)
  const [firstParagraphHeight, setFirstParagraphHeight] = useState<number | null>(null);
  const iconRef = useRef(null)

  return (
    <main className="min-h-screen p-5 bg-[#FAFAFA]">
      <section className="mt-10 md:w-[80%] md:mx-auto">
        <section className="mt-6 border rounded-sm">
          <span className="border-b p-6 block"></span>
            <CustomEditor 
              wordCount={wordCount}
              setWordCount={setWordCount}
              firstParagraphHeight={firstParagraphHeight}
              setFirstParagraphHeight={setFirstParagraphHeight}
            />
          <div className="p-3 bg-white flex justify-end">
            <span className='text-xs'>{wordCount}/1000 words</span>
          </div>
        </section>
          <div className="flex justify-end mt-4">
            <button className="bg-[#0A7227] text-white p-1 px-3.5 text-sm rounded-sm">Post</button>
          </div>
      </section>

    </main>
  );
}
