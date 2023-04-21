import styles from '@/styles/Home.module.css';

export default function Footer({ footerText }) {
  return (
    <div>
      <footer className="bg-dark" style={{textAlign: "center", position: "fixed", width: "100%", bottom: "0"}}>
        <span className='text'>{footerText}</span>
      </footer>
    </div>
  );
}