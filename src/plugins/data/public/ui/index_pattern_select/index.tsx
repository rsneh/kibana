/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React from 'react';
import { EuiLoadingContent, EuiDelayRender } from '@elastic/eui';
import type { IndexPatternSelectProps } from './index_pattern_select';

const Fallback = () => (
  <EuiDelayRender>
    <EuiLoadingContent lines={1} />
  </EuiDelayRender>
);

const LazyIndexPatternSelect = React.lazy(() => import('./index_pattern_select'));
export const IndexPatternSelect = (props: IndexPatternSelectProps) => (
  <React.Suspense fallback={<Fallback />}>
    <LazyIndexPatternSelect {...props} />
  </React.Suspense>
);

export * from './create_index_pattern_select';
export type { IndexPatternSelectProps } from './index_pattern_select';
