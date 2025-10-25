import { useEffect, useState } from 'react'
import { Stack, Switch, Text, Flex, Box, Label, Card } from '@sanity/ui'
import { set, unset } from 'sanity'
import { useClient } from 'sanity'
import { BooleanInputProps, useFormValue } from 'sanity';

type Reference = {
  _ref: string;
  _type?: string; // optional, usually the document type
};
export default function RequiresLoginInput(props: BooleanInputProps) {
  const { value, onChange, readOnly } = props
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

        // Only patch if not read-only and not already true
        if (!readOnly && value !== true) {
          onChange(set(true))
        }
      }
    }

    fetchParent()
  }, [parent?._ref, readOnly, value, onChange])

  return (
        <Stack space={3}>
      <Flex align="center">
        <Box flex={1}>
          <Label>Requires login</Label>
        </Box>
        {!parentRequiresLogin && <Switch
          checked={!!value}
          onChange={(e) => {
            const target = e.target as HTMLInputElement;
            onChange(target.checked ? set(true) : unset());
          }}
          disabled={parentRequiresLogin}
        />}
      </Flex>

      {parentRequiresLogin && (
        <Card padding={2} tone="transparent">
          <Text size={1} muted>
            This page must require login because the parent does.
          </Text>
        </Card>
      )}
    </Stack>
  )
}
