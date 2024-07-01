"use client"
import { useEffect, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import EmbedsContainer from './embeds';

interface CustomEditorProps {
  wordCount: number,
  setWordCount: (arg: number) => void,
  firstParagraphHeight: number | null
  setFirstParagraphHeight: (arg: number) => void,
}

export default function CustomEditor({ wordCount, setWordCount, firstParagraphHeight, setFirstParagraphHeight }: CustomEditorProps) {
  const [value, setValue] = useState('');
  const quillRef = useRef<ReactQuill | null>(null);

  const WORD_LIMIT = 1000;

  const countWords = (text: string): number => {
    const trimmedText = text.trim();
    if (trimmedText.length === 0) {
      return 0;
    }
    return trimmedText.split(/\s+/).length;
  };


  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["link", "image"],
      [{ 'align': '' }, { 'align': 'right' }, { 'align': 'center' }],
      ["bold", "italic"],
      [{ 'list': 'bullet' }, { 'list': 'ordered' },
      { 'indent': '-1' }],
      // ["blockquote", "code-block"], ["bold", "italic", "underline"],
    ]
  }

  const handleChange = (content: string) => {
    setValue(content);
    const text = quillRef.current?.getEditor().getText() || '';
    const currentWordCount = countWords(text);
    setWordCount(currentWordCount);


    if (currentWordCount >= WORD_LIMIT) {
      quillRef.current?.getEditor().disable();
    } else {
      quillRef.current?.getEditor().enable();
    }

  };
  

  return (
    <section className='relative'>
      <ReactQuill
        ref={quillRef}
        theme="snow"
        modules={modules}
        value={value}
        onChange={handleChange}

        className='h-[70vh] border-b-0 overflow-y-scroll'
      />
      <div className='absolute bottom-28'>
        <EmbedsContainer
          editorContent={value}
          setEditorContent={setValue}
          quillRef={quillRef}
        />
      </div>
    </section>
  );
}
