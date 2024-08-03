import { Specialties, Transformation, About, Cases, Footer } from '@/components';
import { ToastContainer, toast} from 'react-toastify';
import tempImage from '@/assets/tempImage.svg'
export default function Home() {
  const tempImageArray = [tempImage]
  return (
    <main className="h-screen w-screen bg-black flex justify-center items-center">
      <h1>Em construção</h1>
      {/* <Transformation.Root />
      <Specialties.Root />
      <About.Root />
      <Cases.Root title='Confira alguns' boldTitle='cases realizados' caseInformations={tempImageArray} wppNumber='por numero aqui' />
      <Footer.Root />
      <ToastContainer /> */}
    </main>
  );
}
