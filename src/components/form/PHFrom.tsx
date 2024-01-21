import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TFormconfig = {
  defaultValues?: Record<string, any>;
};

type TFormprops = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
} & TFormconfig;

const PHFrom = ({ onSubmit, children, defaultValues }: TFormprops) => {
  const formconfig: TFormconfig = {};

  if (defaultValues) {
    formconfig["defaultValues"] = defaultValues;
  }

  const methods = useForm(formconfig);
  
  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
      </FormProvider>
    </div>
  );
};

export default PHFrom;
