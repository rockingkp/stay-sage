import { Label } from "@/components/ui/label";
import { formattedCountries } from "@/utils/countries";
import Flag from "react-world-flags";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const name = "country";

const CountriesInput = ({ defaultValue }: { defaultValue?: string }) => {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        Country
      </Label>

      <Select
        defaultValue={defaultValue || formattedCountries[101].code}
        name={name}
        required
      >
        <SelectTrigger id={name}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {formattedCountries.map((item) => (
            <SelectItem key={item.code} value={item.code}>
              <span className="flex items-center gap-2">
                <Flag code={item.code} style={{ width: 20, height: 20 }} />
                {item.name}
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CountriesInput;
