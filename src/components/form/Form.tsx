"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import * as z from "zod";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./Form.scss";

const schema = z.object({
  name: z.string().min(1, { message: "Required" }),
  email: z.string().email({ message: "Invalid email" }),
  phone: z.string().min(10, { message: "Invalid phone number" }),
  address: z.string().min(1, { message: "Required" }),
  message: z.string().min(1, { message: "Required" }),
});
export default function Form() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data: z.infer<typeof schema>) => {
    console.log(data);
    toast.success("Message sent successfully");
  };
  return (
    <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-content">
        <div className="input-group">
          <div className="input-group-item">
            <input placeholder="Name" {...register("name")} />
            {errors.name && <p className="error">{errors.name.message}</p>}
          </div>
          <div className="input-group-item">
            <input placeholder="Email" {...register("email")} />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>
        </div>
        <div className="input-group-item">
          <Controller
            name="phone"
            control={control}
            render={({ field: { onChange, value } }) => (
              <PhoneInput
                country={"ca"}
                value={value}
                onChange={(phone) => onChange(phone)}
                inputStyle={{ width: "100%", height: "56px" }}
                enableSearch
                disableSearchIcon
                searchStyle={{ width: "100%", height: "40px" }}
                dropdownStyle={{ width: "260px" }}
                searchPlaceholder="Search country code"
                countryCodeEditable={false}
                enableAreaCodes={true}
                showDropdown={true}
                renderStringAsFlag=""
                autocompleteSearch={true}
              />
            )}
          />
          {errors.phone && <p className="error">{errors.phone.message}</p>}
        </div>
        <div className="input-group-item">
          <input placeholder="Address" {...register("address")} />
          {errors.address && <p className="error">{errors.address.message}</p>}
        </div>
        <div className="input-group-item">
          <textarea placeholder="Message" {...register("message")} />
          {errors.message && <p className="error">{errors.message.message}</p>}
        </div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
