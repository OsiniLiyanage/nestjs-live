import createUser from '../actions/form-actions';

export default function UserForm() {
  return (
    <div>
      <form action={createUser}>
        <input type="text" name="name" placeholder="Enter your name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}