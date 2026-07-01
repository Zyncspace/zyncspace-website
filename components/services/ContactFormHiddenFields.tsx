import type { ContactFormType, ContactIntent } from '@/lib/contact';

type ContactFormHiddenFieldsProps = {
  source: string;
  formType: ContactFormType;
  pagePath: string;
  intent?: ContactIntent;
};

export default function ContactFormHiddenFields({
  source,
  formType,
  pagePath,
  intent,
}: ContactFormHiddenFieldsProps) {
  return (
    <>
      <input type="hidden" name="source" value={source} />
      <input type="hidden" name="form_type" value={formType} />
      <input type="hidden" name="page_path" value={pagePath} />
      {intent ? <input type="hidden" name="intent" value={intent} /> : null}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: '-9999px',
          width: 1,
          height: 1,
          overflow: 'hidden',
        }}
      >
        <label htmlFor={`hp-${formType}`}>Website</label>
        <input type="text" id={`hp-${formType}`} name="website" tabIndex={-1} autoComplete="off" />
      </div>
    </>
  );
}
