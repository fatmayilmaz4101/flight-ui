import "./form-field.css";
import {
  AutoComplete,
  AutoCompleteChangeEvent,
  AutoCompleteCompleteEvent,
} from "primereact/autocomplete";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { SelectItemOptionsType } from "primereact/selectitem";
import { Controller } from "react-hook-form";

type FormFieldType = {
  imageSrc?: string; // Yeni prop, imageSrc
  control: any;
  name: string;
  label: string;
  required?: string;
  type: "dropdown" | "text" | "number" | "dropdown" | "autocomplete" | "calendar";
  options?: SelectItemOptionsType | undefined;
  onChangeComplete?: (event: AutoCompleteChangeEvent) => void;
  suggestions?: any[] | undefined;
  completeMethod?(event: AutoCompleteCompleteEvent): void;
  disabled?: boolean;
  className?: string;
};

export const FormField = ({
  imageSrc, // imageSrc prop'u eklendi
  control,
  required,
  type,
  name,
  label,
  options,
  onChangeComplete,
  suggestions,
  completeMethod,
  disabled = false,
  className,
}: FormFieldType) => {
  return (
    <Controller
      control={control}
      rules={{
        required: required,
      }}
      render={({
        field: { onBlur, onChange, value },
        fieldState: { error },
      }) => (
        <div className={`field col-12 mb-1 input-wrapper ${className}`}>
          <span className="p-float-label input-icon-wrapper">
            {imageSrc && (
              <div className="icon-container">
                <img src={imageSrc} alt="icon" height={20} className="input-image" /> {/* Resim */}
              </div>
            )}
            {type === "text" ? (
              <InputText
                onBlur={onBlur}
                disabled={disabled}
                onChange={onChange}
                value={value}
                {...(error && {
                  tooltip: error.message,
                  tooltipOptions: {
                    position: "top",
                    className: "p-error",
                  },
                })}
                className={`${error ? "p-invalid" : ""} ${className}`}
              />
            ) : type === "number" ? (
              <InputNumber
                onBlur={onBlur}
                disabled={disabled}
                onChange={(e) => {
                  onChange(e.value);
                }}
                value={value}
                id={name}
                {...(error && {
                  tooltip: error.message,
                  tooltipOptions: {
                    position: "top",
                    className: "p-error",
                  },
                })}
                className={`${error ? "p-invalid" : ""} ${className}`}
              />
            ) : type === "dropdown" ? (
              <Dropdown
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                disabled={disabled}
                {...(error && {
                  tooltip: error.message,
                  tooltipOptions: {
                    position: "top",
                    className: "p-error",
                  },
                })}
                className={`${error ? "p-invalid" : ""} ${className}`}
                checkmark={true}
                highlightOnSelect={false}
                optionLabel="label"
                options={options}
              />
            ) :
              type === "calendar" ? (
                <Calendar
                  value={value}
                  variant="filled"
                  onChange={(e) => onChange(e.value)}
                  disabled={disabled}
                  className={`${error ? "p-invalid" : ""} ${className} custom-calendarr`}
                  {...(error && {
                    tooltip: error.message,
                    tooltipOptions: {
                      position: "top",
                      className: "p-error",
                    },
                  })}
                />
              ) :
                (
                  <AutoComplete
                    id="autocomplete"
                    onBlur={onBlur}
                    disabled={disabled}
                    value={value}
                    onChange={(e) => {
                      onChange(e.value);
                      onChangeComplete?.(e);
                    }}
                    suggestions={suggestions}
                    completeMethod={completeMethod}
                    field={name}
                    {...(error && {
                      tooltip: error.message,
                      tooltipOptions: {
                        position: "top",
                        className: "p-error",
                      },
                    })}
                    className={`${error ? "p-invalid" : ""} ${className}`}
                  />
                )}
          </span>
        </div>
      )}
      name={name}
    />
  );
};
