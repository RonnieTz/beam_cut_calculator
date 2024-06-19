'use client';

import Form from './components/Form';
import RafterView from './components/RafterView';
import SpactatorView from './components/SpactatorView';
import { useRef } from 'react';

export default function Home() {
  const r_ref = useRef<HTMLInputElement>(null);
  const t_ref = useRef<HTMLInputElement>(null);
  const w_ref = useRef<HTMLInputElement>(null);
  const h_ref = useRef<HTMLInputElement>(null);
  return (
    <main>
      <SpactatorView />
      <RafterView r_ref={r_ref} t_ref={t_ref} w_ref={w_ref} h_ref={h_ref} />
      <Form r_ref={r_ref} t_ref={t_ref} w_ref={w_ref} h_ref={h_ref} />
    </main>
  );
}
