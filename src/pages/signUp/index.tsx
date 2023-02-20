import Link from 'next/link';
import { Form, Field } from "react-final-form";
import Button from '../../app/components/Button';
import InputWrapper from '../../app/components/InputWrapper';
import TextInput from '../../app/components/TextInput';

interface IFormsValues {
  email?: string;
  password?: string;
  rememberMe?: boolean;
};

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async (values: IFormsValues) => {
  await sleep(300);
  window.alert(JSON.stringify(values, undefined, 2));
};

const signUp: React.FC = () => {
  return (
    <div className='select-none flex flex-col justify-center w-80 text-gray-500 items-center px-6 py-6 border-slate-500 shadow-lg bg-white rounded-lg'>
      <h3 className='text-left w-full pb-6 font-semibold'>SIGN UP</h3>
      <Form
        onSubmit={onSubmit}
        initialValues={{
          email: "",
          password: "",
          rememberMe: false,
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
            <div className='pb-2 w-full'>
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
              SIGN UP
            </Button>
          </form>
        )}
      />
      <div className='inline-flex items-center justify-center w-full'>
        <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
        <span className="absolute px-3 font-normal -translate-x-1/2 bg-white left-1/2">OR</span>
      </div>
      <p className='text-sm'>Already a user? <Link className='border border-x-white border-y-white border-b-gray-500' href="/">LOGIN</Link></p> 
    </div>
  )
}

export default signUp;
