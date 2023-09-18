import Container from './container'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import { Button } from './ui/button';
import { Separator } from './ui/separator';


const questions = [
  {
    id: 1,
    question: "What is Bookmark?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
  },
  {
    id: 2,
    question: "How can I request a new browser?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    id: 3,
    question: "Is there a mobile app?",
    answer:
      "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
  },
  {
    id: 4,
    question: "What about other Chromium browsers?",
    answer:
      "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
  },
];


const Questions = () => {
  return (
    <div className='pb-24'>
      <Container>
        <div className='flex flex-col items-center gap-y-6'>
          <h2 className='capitalize font-medium text-2xl lg:text-3xl'>
            Download the extension
          </h2>
          <p className='text-muted-foreground w-full lg:max-w-lg text-center'>
            We&apos;ve got more browsers in the pipeline. Please do let us know if
            you&apos;ve got a favourite you&apos;d like us to prioritize.
          </p>
          <Separator className='w-full max-w-2xl mb-[-2rem]'/>
          <Accordion type="single" collapsible className="max-w-2xl w-full">
            {questions.map((question) => (
              <AccordionItem key={question.id} value={`item-${question.id}`} className='my-2'>
                <AccordionTrigger className='text-neutral-600'>{question.question}</AccordionTrigger>
                <AccordionContent className='text-muted-foreground'>{question.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Button size={'lg'}>
            More Info
          </Button>
        </div>
      </Container>
    </div>
  )
}

export default Questions