import React, { useEffect } from 'react';
import Input from './Input';
import { useForm } from 'react-hook-form';
import Button from './Button';
import { postCard, putCard } from '../backend';
import { useNavigate } from 'react-router-dom';

export default function Form({ passedCard }) {
  console.log(passedCard);
  const navigate = useNavigate();
  const { handleSubmit, register, setValue } = useForm({
    defaultValues: {
      name: passedCard?.name || '',
      description: passedCard?.description || '',
      interests: passedCard?.interests
        ? JSON.stringify(passedCard.interests)
        : '',
      socials: passedCard?.socials ? JSON.stringify(passedCard.socials) : '',
    },
  });
  useEffect(() => {
    // Set default values when passedCard changes
    setValue('name', passedCard?.name || '');
    setValue('description', passedCard?.description || '');
    setValue(
      'interests',
      passedCard?.interests ? JSON.stringify(passedCard.interests) : ''
    );
    setValue(
      'socials',
      passedCard?.socials
        ? JSON.stringify(passedCard.socials.map(el => [el.name, el.click]))
        : ''
    );
  }, [passedCard, setValue]);
  const onSubmit = async values => {
    values.socials = JSON.parse(values.socials);
    const socials = values.socials.map(social => {
      const [name, click] = social;
      return { name, click };
    });
    const interests = JSON.parse(values.interests);
    const card = {
      name: values.name,
      description: values.description,
      socials,
      interests,
    };
    if (passedCard) {
      return putCard(id).then(data => {
        console.log(data.message || data.error);
        navigate('/');
      });
    }

    postCard(card).then(data => {
      console.log(data.message || data.error);
      navigate('/');
    });
  };
  return (
    <>
      <div className="text-center mx-4 my-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label={'name'}
            id={'name'}
            placeholder={'Enter name'}
            {...register('name', { required: true })}
          />
          <Input
            label={'description'}
            id={'description'}
            placeholder={'Enter description'}
            {...register('description', { required: true })}
          />
          <Input
            label={'interests'}
            id={'interests'}
            placeholder={'Enter interests as an array of strings'}
            {...register('interests')}
          />
          <Input
            label={'socials'}
            id={'socials'}
            placeholder={`Enter socials as an array of arrays like [["name of social platform","link of social platform"],["another platform",'another link']]`}
            {...register('socials')}
          />

          <Button type={'submit'} name={passedCard ? 'Update' : 'Submit'} />
        </form>
      </div>
    </>
  );
}
