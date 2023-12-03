import CreateTaskForm from "../features/tasks/create-task-form"
import Tasks from "../features/tasks/tasks"

const Home = () => {
  return (
    <section className="flex flex-col gap-4">
      <section className="hero">
        <div className="absolute inset-0">
          <img
            className="absolute inset-0 h-full object-cover"
            src="https://assets.tryhackme.com/img/svgs/star-pattern.svg"
            alt=""
          />
          <img
            className="absolute bottom-0"
            src="https://tryhackme.com/img/illustrations/waves.svg"
            alt=""
          />
        </div>
        <div className="relative h-full">
          <img
            className="mt-8 mx-auto h-1/3 md:w-1/3 md:absolute md:right-8 md:top-1/4 rocket-man"
            src="https://tryhackme.com/img/getting-started/rocketman.svg"
            alt=""
          />
          <section className="md:h-full h-1/2 md:w-1/2 flex flex-col gap-4 font-medium justify-center text-center items-stretch p-4 md:mr-auto">
            <h1 className="text-3xl font-bold">Full Stack Task App</h1>
            <p>Enter a task and author below to create a task</p>
            <p>Once created, you can set a task as completed</p>
          </section>
        </div>
      </section>
      <section className="max-w-xl w-full m-auto p-4">
        <CreateTaskForm />
      </section>
      <section className="grid p-4 gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Tasks />
      </section>
    </section>
  )
}

export default Home
