import Image from 'next/image';
import styles from './payment.module.css';

const Payment = () => {
  return (
    <div className='container'>
      <h3 className="text-center p-3">Medios de Pago</h3>
      <div className={`${styles.box}`}>
        <div className="row m-0">
          <div className='col-lg-6 col-md-6 col-12'>
            <p className='text-center m-2'><Image width={74.65} height={70} src='/images/tc.png' alt='logo' quality={100} /></p>
            <p className='text-center'>Tarjeta de Crédito</p>
          </div>
          <div className='col-lg-6 col-md-6 col-12'>
            <p className='text-center m-2'><Image width={152.5} height={70} src='/images/pp.png' alt='logo' quality={100} /></p>
            <p className='text-center'>Paypal</p>
          </div>
          <div className='col-lg-6 col-md-6 col-12'>
            <p className='text-center m-2'><Image width={160} height={70} src='/images/mp.png' alt='logo' quality={100} /></p>
            <p className='text-center'>Mercado Pago</p>
          </div>
          <div className='col-lg-6 col-md-6 col-12'>
            <p className='text-center m-2'><Image width={90} height={70} src='/images/tb.png' alt='logo' quality={100} /></p>
            <p className='text-center'>Transferencia Bancaria</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
