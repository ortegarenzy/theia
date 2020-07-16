/********************************************************************************
 * Copyright (C) 2020 Ericsson and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/

import { inject, injectable } from 'inversify';
import { VSXVariablesServer } from '../common/vsx-variables-server';
import { VSCODE_DEFAULT_API_VERSION } from '@theia/plugin-ext-vscode/lib/node/plugin-vscode-init';
import { PluginVsCodeCliContribution } from '@theia/plugin-ext-vscode/lib/node/plugin-vscode-cli-contribution';

@injectable()
export class VSXVariablesServerImpl implements VSXVariablesServer {

    @inject(PluginVsCodeCliContribution)
    protected readonly cli: PluginVsCodeCliContribution;

    async getVscodeApiVersion(): Promise<string> {
        const apiVersion = this.cli.getApiVersion() || VSCODE_DEFAULT_API_VERSION;
        return Promise.resolve(apiVersion);
    }

}
