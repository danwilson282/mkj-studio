import { useEffect, useState } from 'react'
import { Stack, Switch, Text } from '@sanity/ui'
import { set, unset } from 'sanity'
import { useClient } from 'sanity'
import { BooleanInputProps, useFormValue } from 'sanity';

type Reference = {
  _ref: string;
  _type?: string; // optional, usually the document type
};
export default function RequiresLoginInput(props: BooleanInputProps) {
  const { value, onChange } = props
  const client = useClient({ apiVersion: process.env.SANITY_STUDIO_API_VERSION || '2023-10-10' })
  const parent = useFormValue(['parent']) as Reference;
  const [parentRequiresLogin, setParentRequiresLogin] = useState(false)

  useEffect(() => {
    const fetchParent = async () => {
        
      const parentRef = parent?._ref
      if (!parentRef) return

      const data = await client.fetch(`*[_id == $id][0]{requiresLogin}`, {
        id: parentRef,
      })
      if (data?.requiresLogin) {
        setParentRequiresLogin(true)
        onChange(set(true)) // force true if parent requires login
      }
    }

    fetchParent()
  }, [parent, onChange, client])

  return (
    <Stack space={2}>
        <Text size={1}>
          Requires login?
        </Text>
      <Switch
        checked={!!value}
        onChange={(e) => {
        const target = e.target as HTMLInputElement;
        onChange(target.checked ? set(true) : unset());
        }}
        disabled={parentRequiresLogin}
      />
      {parentRequiresLogin && (
        <Text size={1} muted>
          This page must require login because the parent does.
        </Text>
      )}
    </Stack>
  )
}
