'use client'; 

import { Inter } from '@next/font/google'
import { Form, Field } from "react-final-form";
import TextInput from './components/TextInput';

const inter = Inter({ subsets: ['latin'] });

interface IFromsValues {
  email?: string;
  password?: string;
};

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async (values: IFromsValues) => {
  await sleep(300);
  window.alert(JSON.stringify(values, undefined, 2));
};

const Home: React.FC = () => {
  return (
    <div className=' flex flex-col justify-center w-80 items-center px-6 py-6 border-slate-500 shadow-lg bg-white rounded-lg'>
      <h3 className='text-left w-full pb-6 text-gray-500 font-semibold'>SIGN IN</h3>
      <Form
        onSubmit={onSubmit}
        validate={ values => {
          const errors: Record<string, string> = {};
          if (!values.email) {
            errors.email = 'Required'
          }
          if (!values.password) {
            errors.password = 'Required'
          }
          return errors;
        }}
        render={({ handleSubmit, form, submitting, values }) => (
          <form className='flex flex-col justify-start items-start w-full text-sm' onSubmit={handleSubmit}>
            <div className='w-full pb-2'>
              <label className='text-gray-500'>Email</label>
              <Field<string>
                name='email'
                component={TextInput}
                placeholder='Email...'
              />
            </div>
            <div className='w-full'>
              <label className='text-gray-500 text-xs'>Password</label>
              <Field<string>
                name='Password'
                component={TextInput}
                placeholder='Password...'
              />
            </div>
          </form>
        )}
      />
    </div>
  )
}

export default Home;
