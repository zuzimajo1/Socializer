import { Card, CardHeader, CardContent, Skeleton } from "@mui/material";
import SignalWifiConnectedNoInternet4Icon from '@mui/icons-material/SignalWifiConnectedNoInternet4';

import { PostState } from "../../features/slice/postSlice";
import { useAppSelector } from '../../hooks/rtk.hooks';
import { Container } from '../../styles/Containers.styled';
import { PostProps } from '../../utils/types';
import SinglePost from '../Post/SinglePost';
import TypographyText from '../Text/TypographyText';
import SkeletonContents from "./SkeletonContents";


const PostContents = () => {
    const post = useAppSelector<PostState>((state) => ({
        isLoading: state.post.isLoading,
        post: state.post.post,
        isSuccess: state.post.isSuccess,
    }));

    if (post.isLoading && !post.isSuccess) {
        return (
            <>
                <Container width="100%" height="200px" backgroundColorLight="var(--background-color-light)" backgroundColorDark="var(--background-color-dark)" padding="var(--padding-md) var(--padding-lg)" margin="var(--padding-md) 0" borderRadius="var(--border-radius-sm)">
                    <Container width="100%" display="flex">
                        <SkeletonContents variant="circular" width="50px" height="50px" />
                        <Container width="100%" vertical margin="0 var(--padding-md)">
                            <SkeletonContents variant="text" fontSize="1.2rem" width="120px" />
                            <SkeletonContents variant="text" fontSize="1rem" width="80px" />
                            <SkeletonContents variant="text" fontSize="1rem" width="100%" margin="var(--spacing-md) 0" />
                            <SkeletonContents variant="text" fontSize="1rem" width="60%" />
                        </Container>
                    </Container>
                </Container>
                <Container width="100%" height="200px" backgroundColorLight="var(--background-color-light)" backgroundColorDark="var(--background-color-dark)" padding="var(--padding-md) var(--padding-lg)" borderRadius="var(--border-radius-sm)">
                    <Container width="100%" display="flex">
                        <SkeletonContents variant="circular" width="50px" height="50px" />
                        <Container width="100%" vertical margin="0 var(--padding-md)">
                            <SkeletonContents variant="text" fontSize="1.2rem" width="100px" />
                            <SkeletonContents variant="text" fontSize="1rem" width="80px" />
                            <SkeletonContents variant="text" fontSize="1rem" width="100%" margin="var(--spacing-md) 0" />
                            <SkeletonContents variant="text" fontSize="1rem" width="100%" />
                            <SkeletonContents variant="text" fontSize="1rem" width="30%" />
                        </Container>
                    </Container>
                </Container>
                <Container width="100%" height="200px" backgroundColorLight="var(--background-color-light)" backgroundColorDark="var(--background-color-dark)" padding="var(--padding-md) var(--padding-lg)" margin="var(--padding-md) 0" borderRadius="var(--border-radius-sm)">
                    <Container width="100%" display="flex">
                        <SkeletonContents variant="circular" width="50px" height="50px" />
                        <Container width="100%" vertical margin="0 var(--padding-md)">
                            <SkeletonContents variant="text" fontSize="1.2rem" width="70px" />
                            <SkeletonContents variant="text" fontSize="1rem" width="80px" />
                            <SkeletonContents variant="text" fontSize="1rem" width="70%" margin="var(--spacing-md) 0" />
                        </Container>
                    </Container>
                </Container>
            </>
        )
    }

    if (!post.isLoading && !post.isSuccess) {
        return (
            <Container width="100%" display="flex" justifyContent="center" alignItems="center"  height="200px" backgroundColorLight="var(--background-color-light)" backgroundColorDark="var(--background-color-dark)" margin="var(--padding-md) 0" borderRadius="var(--border-radius-sm)">
                <SignalWifiConnectedNoInternet4Icon fontSize="medium" sx={{margin: "0 var(--spacing-md)"}} />
                <TypographyText text="Unable to connect to network" fontweigth="600" variant="h6" />
            </Container>
        )
    }

    return (
        <Container width="100%" margin='var(--padding-md) 0 0 0'>
            {post.post.map((props: PostProps) => (
                <SinglePost key={props._id} {...props} />
            ))}
        </Container>
    )
}

export default PostContents