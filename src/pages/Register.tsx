import Navbar from '../components/Navbar';
import { useForm } from 'react-hook-form';
import { User, AuthResponse } from '../utils/common.types';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
//import { useState } from 'react';

export default function Register() {
  //const [fail, setFail] = useState<string>();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<User>();

  async function onSubmit(data: User) {
    const response: Response = await fetch('http://localhost:8080/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: {
          first: data.name.first,
          last: data.name.last
        },
        location: data.location,
        work: data.work,
        picture: `https://api.dicebear.com/6.x/big-ears-neutral/svg?seed=${data.name.first}${data.name.last}`,
        description: data.description,
        login: {
          email: data.login?.username,
          password: data.login?.password
        }
      })
    });
    const res: AuthResponse = (await response.json()) as AuthResponse;
    if (res?.data) {
      navigate('/Login');
    } else {
      //setFail(res?.message);
      alert(res.message);
    }
  }

  return (
    <>
      <header className=' bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] sticky top-0'>
        <Navbar />
      </header>
      <div className='container mx-auto'>
        <div className='grid grid-cols-12 grid-rows-3 gap-4'>
          <div className='col-span-12 row-span-3 py-5 md:col-span-5 md:col-start-5'>
            <div className='block p-6 bg-white rounded-lg outline outline-1 outline-neutral-500/20'>
              <h5 className='mb-1 text-3xl font-bold leading-tight text-center text-neutral-800'>
                Welcome to DEV Community
              </h5>
              <p className='mb-4 text-base text-center text-neutral-600'>
                Register to take part in a community of 1,096,472 amazing
                developers
              </p>
              <form
                className='flex flex-col justify-center gap-3'
                onSubmit={(event) => void handleSubmit(onSubmit)(event)}
              >
                <div className='flex justify-around'>
                  <div>
                    <label htmlFor='name-input'>
                      Name
                      {errors.name?.first && (
                        <span className='text-xs text-center text-red-500 ps-2'>
                          {`ⓘ ${errors.name?.first.message ?? 'Error'}`}
                        </span>
                      )}
                    </label>
                  </div>
                  <label htmlFor='lastName-input'>
                    Last Name{' '}
                    {errors.name?.last && (
                      <span className='text-xs text-center text-red-500 ps-2'>
                        {`ⓘ ${errors.name?.last.message ?? 'Error'}`}
                      </span>
                    )}
                  </label>
                </div>
                <div className='flex gap-5'>
                  <div
                    className={clsx(
                      'flex w-full rounded h-9 outline outline-2 outline-neutral-900/50 hover:outline-2 hover:outline-indigo-600',
                      {
                        'outline-red-500': errors.name?.first
                      }
                    )}
                  >
                    <input
                      type='text'
                      className='empty-input grow'
                      {...register('name.first', {
                        required: { value: true, message: 'Name Required' }
                      })}
                    />
                  </div>
                  <div
                    className={clsx(
                      'flex w-full rounded h-9 outline outline-2 outline-neutral-900/50 hover:outline-2 hover:outline-indigo-600',
                      {
                        'outline-red-500': errors.name?.last
                      }
                    )}
                  >
                    <input
                      type='text'
                      className='empty-input grow'
                      {...register('name.last', {
                        required: { value: true, message: 'Last Name Required' }
                      })}
                    />
                  </div>
                </div>
                <label htmlFor='location-input' className='text-center'>
                  Location{' '}
                  {errors.location && (
                    <span className='text-xs text-center text-red-500 ps-2'>
                      {`ⓘ ${errors.location.message ?? 'Error'}`}
                    </span>
                  )}
                </label>
                <div
                  className={clsx(
                    'flex w-full rounded h-9 outline outline-2 outline-neutral-900/50 hover:outline-2 hover:outline-indigo-600',
                    {
                      'outline-red-500': errors.location
                    }
                  )}
                >
                  <input
                    type='text'
                    className='empty-input grow'
                    {...register('location', {
                      required: { value: true, message: 'Location Required' }
                    })}
                  />
                </div>
                <label htmlFor='work-input' className='text-center'>
                  Work description{' '}
                  {errors.work && (
                    <span className='text-xs text-center text-red-500 ps-2'>
                      {`ⓘ ${errors.work.message ?? 'Error'}`}
                    </span>
                  )}
                </label>
                <div
                  className={clsx(
                    'flex w-full rounded h-9 outline outline-2 outline-neutral-900/50 hover:outline-2 hover:outline-indigo-600',
                    {
                      'outline-red-500': errors.work
                    }
                  )}
                >
                  <input
                    type='text'
                    className='empty-input grow'
                    {...register('work', {
                      required: {
                        value: true,
                        message: 'Work description Required'
                      }
                    })}
                  />
                </div>
                <label htmlFor='about-input' className='text-center'>
                  About You{' '}
                  {errors.description && (
                    <span className='text-xs text-center text-red-500 ps-2'>
                      {`ⓘ ${errors.description.message ?? 'Error'}`}
                    </span>
                  )}
                </label>
                <div
                  className={clsx(
                    'flex w-full rounded h-9 outline outline-2 outline-neutral-900/50 hover:outline-2 hover:outline-indigo-600',
                    {
                      'outline-red-500': errors.description
                    }
                  )}
                >
                  <input
                    type='text'
                    className='empty-input grow'
                    {...register('description', {
                      required: { value: true, message: 'About You Required' }
                    })}
                  />
                </div>
                <label htmlFor='email-input' className='text-center'>
                  Email{' '}
                  {errors.login?.username && (
                    <span className='text-xs text-center text-red-500 ps-2'>
                      {`ⓘ ${errors.login.username.message ?? 'Error'}`}
                    </span>
                  )}
                </label>
                <div
                  className={clsx(
                    'flex w-full rounded h-9 outline outline-2 outline-neutral-900/50 hover:outline-2 hover:outline-indigo-600',
                    {
                      'outline-red-500': errors.login?.username
                    }
                  )}
                >
                  <input
                    type='text'
                    className='empty-input grow'
                    {...register('login.username', {
                      required: { value: true, message: 'Email Required' }
                    })}
                  />
                </div>
                <label htmlFor='pwd-input' className='text-center'>
                  Password{' '}
                  {errors.login?.password && (
                    <span className='text-xs text-center text-red-500 ps-2'>
                      {`ⓘ ${errors.login.password.message ?? 'Error'}`}
                    </span>
                  )}
                </label>
                <div
                  className={clsx(
                    'flex w-full rounded h-9 outline outline-2 outline-neutral-900/50 hover:outline-2 hover:outline-indigo-600',
                    {
                      'outline-red-500': errors.login?.password
                    }
                  )}
                >
                  <input
                    type='password'
                    className='empty-input grow'
                    {...register('login.password', {
                      required: { value: true, message: 'Password Required' }
                    })}
                  />
                </div>
                <input
                  type='submit'
                  className='h-12 font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-600/90'
                  value='Register'
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
