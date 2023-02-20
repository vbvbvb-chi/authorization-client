'use client'; 

import { Inter } from '@next/font/google'
import { Form, Field } from "react-final-form";
import Button from './components/Button';
import InputWrapper from './components/InputWrapper';
import TextInput from './components/TextInput';

const inter = Inter({ subsets: ['latin'] });

interface IFormsValues {
  email?: string;
  password?: string;
};

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async (values: IFormsValues) => {
  await sleep(300);
  window.alert(JSON.stringify(values, undefined, 2));
};

const Home: React.FC = () => {
  return (
    <div className=' flex flex-col justify-center w-80 items-center px-6 py-6 border-slate-500 shadow-lg bg-white rounded-lg'>
      <h3 className='text-left w-full pb-6 text-gray-500 font-semibold'>LOGIN</h3>
      <Form
        onSubmit={onSubmit}
        initialValues={{
          email: "",
          password: "",
        }}
        validate={ values => {
          const errors: Record<string, string> = {};
          if (!values.email || !values.password) {
            if (!values.email) {
              errors.email = 'Required'
            }
            errors.password = 'Required'
          }
          return errors;
        }}
        render={({ handleSubmit, submitting, pristine,values }) => (
          <form className='flex flex-col justify-start items-start w-full text-sm' onSubmit={handleSubmit}>
              <div className='pb-6 w-full'>
                <Field name='email'>
                  {({input, meta}) => (
                    <InputWrapper label='Email' input={input} meta={meta}>
                      <TextInput placeholder="Example@example.com" type='text' input={input} meta={meta}/>
                    </InputWrapper>
                  )}
                </Field>
              </div>
              <div className='pb-6 w-full'>
                <Field name='password'>
                  {({input, meta}) => (
                    <InputWrapper label='Password' input={input} meta={meta}>
                      <TextInput placeholder="Password" type='password' input={input} meta={meta}/>
                    </InputWrapper>
                  )}
                </Field>
              </div>
            <Button
              disabled={submitting || pristine}
              type="submit"
            > 
              LOGIN
            </Button>
          </form>
        )}
      />
    </div>
  )
}

export default Home;
