import React from 'react';

import AnimatedPageLayout from '../../components/ui/AnimatedPageLayout/AnimatedPageLayout';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <AnimatedPageLayout>{children}</AnimatedPageLayout>;
}
