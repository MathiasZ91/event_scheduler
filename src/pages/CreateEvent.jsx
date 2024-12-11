const CreateEvent = () => {
    return (
      <main className='my-4'>
        <form className='max-w-screen-md min-h-[80vh] mx-auto flex flex-col items-center gap-4'>
          <label className='form-control w-full '>
            <div className='label'>
              <span className='label-text text-xl'>
                Event Name <span className='text-red-400'>&#42;</span>
              </span>
            </div>
            <input type='text' className='input input-bordered w-full ' />
          </label>
          <label className='form-control w-full '>
            <div className='label'>
              <span className='label-text text-xl'>
                Description <span className='text-red-400'>&#42;</span>
              </span>
            </div>
            <textarea
              type='password'
              className='input input-bordered w-full resize-none min-h-32'
            />
          </label>
          <label className='form-control w-full '>
            <div className='label'>
              <span className='label-text text-xl'>
                Date <span className='text-red-400'>&#42;</span>
              </span>
            </div>
            <input type='date' className='input input-bordered w-full ' />
          </label>
          <label className='form-control w-full '>
            <div className='label'>
              <span className='label-text text-xl'>
                Location <span className='text-red-400'>&#42;</span>
              </span>
            </div>
            <input type='text' className='input input-bordered w-full ' />
          </label>
          <button className='btn btn-primary w-full'>Create New Event</button>
        </form>
      </main>
    );
  };
  
  export default CreateEvent;