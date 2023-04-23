import styles from '@/styles/Home.module.css';

export default function Footer({ footerText }) {
  return (
    <div>
      <footer className="fixed-bottom text-center bg-dark" >
        <span className='text'>{footerText}</span>
      </footer>
    </div>
  );
}