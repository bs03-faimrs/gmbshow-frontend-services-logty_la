import * as React from "react"
import { render } from '../../../../test-utils'
import LoaderContainer from './LoaderContainer'


describe('LoaderContainer', () => {
    it('should take a snapshot', () => {
        const asFragment = render(<LoaderContainer loading={true} />)
        expect(asFragment).toMatchSnapshot()
    })
});



// test('handlers server error', async() => {
//     render(<LoaderContainer loading={true}>)
// await waitFor
// })