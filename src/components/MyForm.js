import { useForm } from 'react-hook-form';
import { Button, Input } from '@chakra-ui/react';

function MyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register('example', { required: true })} placeholder="Example" />
      {errors.example && <span>This field is required</span>}
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default MyForm;